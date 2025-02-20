package dev.linwood.itemmods.action.pack;

import dev.linwood.api.item.ItemStackBuilder;
import dev.linwood.api.translations.Translation;
import dev.linwood.api.ui.item.GuiItem;
import dev.linwood.api.ui.item.StaticItem;
import dev.linwood.api.ui.template.gui.ListGui;
import dev.linwood.api.ui.template.gui.pane.list.VerticalListControls;
import dev.linwood.api.ui.template.item.TranslatedGuiItem;
import dev.linwood.itemmods.ItemMods;
import dev.linwood.itemmods.action.PacksAction;
import dev.linwood.itemmods.action.TranslationCommandAction;
import dev.linwood.itemmods.pack.PackObject;
import dev.linwood.itemmods.pack.asset.TemplateReadyPackAsset;
import dev.linwood.itemmods.pack.custom.CustomTemplate;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import org.bukkit.event.inventory.ClickType;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.Objects;
import java.util.function.Consumer;

public class TemplateAction implements TranslationCommandAction {
    private final PackObject packObject;
    private final Class<? extends TemplateReadyPackAsset> assetClass;

    public TemplateAction(PackObject packObject, Class<? extends TemplateReadyPackAsset> assetClass) {
        this.packObject = packObject;
        this.assetClass = assetClass;
    }

    public static boolean showChoose(CommandSender sender, String namespace, @NotNull Consumer<CustomTemplate> action) {
        return showChoose(sender, namespace, action, null);
    }

    public static boolean showChoose(CommandSender sender, String namespace, @NotNull Consumer<CustomTemplate> action, @Nullable Consumer<InventoryClickEvent> backAction) {
        var t = ItemMods.subTranslation("choose.template", "gui");
        if (!(sender instanceof Player)) {
            sender.sendMessage(t.getTranslation("no-player"));
            return true;
        }
        var gui = new ListGui(t, 4, (listGui) -> Objects.requireNonNull(ItemMods.getPackManager().getPack(namespace)).getTemplates()
                .stream().filter(asset -> new PackObject(namespace, asset.getName()).toString().contains(listGui.getSearchText())).map(asset -> new TranslatedGuiItem(new ItemStackBuilder(asset.getIcon(namespace))
                        .displayName("item").lore("action").build()) {{
                    setRenderAction(gui -> setPlaceholders(new PackObject(namespace, asset.getName()).toString()));
                    setClickAction(event -> action.accept(asset));
                }}).toArray(GuiItem[]::new));
        var back = backAction;
        gui.setListControls(new VerticalListControls() {{
            setBackAction(back);
        }});
        gui.show((Player) sender);
        return true;
    }

    @Override
    public boolean showGui(CommandSender sender) {
        return showGui(sender, null);
    }

    @Override
    public Translation getTranslationNamespace() {
        return ItemMods.subTranslation("template", "gui");
    }

    public boolean showGui(CommandSender sender, @Nullable Consumer<InventoryClickEvent> backAction) {
        if (!(sender instanceof Player)) {
            sender.sendMessage(getTranslation("no-player"));
            return true;
        }
        var current = packObject.getAssetByType(assetClass);
        if (!(current instanceof TemplateReadyPackAsset)) {
            return false;
        }
        var asset = (TemplateReadyPackAsset) current;
        var gui = new ListGui(getTranslationNamespace(), 4, listGui -> asset.getCustomTemplates().stream().map(customTemplateData ->
                new StaticItem(Objects.requireNonNull(customTemplateData.getObject().getTemplate()).getItemIcon(packObject, customTemplateData, asset)) {{
                    setClickAction(event -> {
                        if (event.getClick() == ClickType.DROP)
                            asset.unregisterCustomTemplate(packObject);
                        else if (event.getClick() == ClickType.LEFT) {
                            var action = customTemplateData.getTemplate().generateItemAction(packObject, customTemplateData, asset);
                            if (action != null)
                                action.showGui(event.getWhoClicked());
                        }
                    });
                }}).toArray(GuiItem[]::new));
        var back = backAction;
        gui.setListControls(new VerticalListControls() {{
            setBackAction(back);
            setCreateAction(event -> new PacksAction().showChoose(sender, itemModsPack -> TemplateAction
                    .showChoose(sender, itemModsPack.getName(), customTemplate -> {
                        asset.registerCustomTemplate(new PackObject(itemModsPack.getName(), customTemplate.getName()));
                        packObject.save();
                        gui.rebuild();
                        gui.show((Player) event.getWhoClicked());
                    }, backEvent -> showGui(sender, backAction)), backEvent -> showGui(sender, backAction)));
        }});
        gui.show((Player) sender);
        return true;
    }
}

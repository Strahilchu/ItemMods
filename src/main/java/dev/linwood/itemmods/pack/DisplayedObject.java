package dev.linwood.itemmods.pack;

import dev.linwood.itemmods.action.CommandAction;
import org.bukkit.inventory.ItemStack;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public interface DisplayedObject {
    default @Nullable CommandAction generateAction() {
        return null;
    }

    @NotNull ItemStack getIcon();
}

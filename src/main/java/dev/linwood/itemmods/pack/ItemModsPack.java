package dev.linwood.itemmods.pack;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonPrimitive;
import dev.linwood.api.utils.FileUtils;
import dev.linwood.itemmods.ItemMods;
import dev.linwood.itemmods.action.CommandAction;
import dev.linwood.itemmods.action.pack.PackAction;
import dev.linwood.itemmods.pack.asset.*;
import dev.linwood.itemmods.pack.asset.raw.ModelAsset;
import dev.linwood.itemmods.pack.asset.raw.TextureAsset;
import dev.linwood.itemmods.pack.custom.CustomAssetGenerator;
import dev.linwood.itemmods.pack.custom.CustomTemplate;
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.regex.Pattern;

public class ItemModsPack extends DefinedNamedPackObject implements DisplayedObject {
    public static final Pattern NAME_PATTERN = Pattern.compile("^[a-z_\\-]+$");
    private final boolean editable;
    private final List<CustomAssetGenerator<ItemAsset>> itemGenerators = new ArrayList<>();
    private final List<ItemAsset> items = new ArrayList<>();
    private final List<CustomAssetGenerator<BlockAsset>> blockGenerators = new ArrayList<>();
    private final List<BlockAsset> blocks = new ArrayList<>();
    private final List<String> dependencies = new ArrayList<>();
    private final List<CustomTemplate> templates = new ArrayList<>();
    private final List<CustomAssetGenerator<TextureAsset>> textureGenerators = new ArrayList<>();
    private final List<TextureAsset> textures = new ArrayList<>();
    private final List<CustomAssetGenerator<ModelAsset>> modelGenerators = new ArrayList<>();
    private final List<ModelAsset> models = new ArrayList<>();
    private @NotNull Material icon = Material.GRASS_BLOCK;
    private String description = "";

    public ItemModsPack(@NotNull String name, boolean editable) throws UnsupportedOperationException {
        super(name);
        this.editable = editable;
    }

    public ItemModsPack(@NotNull String name) {
        this(name, true);
    }


    public ItemModsPack(@NotNull Path path) throws IOException {
        super(path.getFileName().toString());
        var br = Files.newBufferedReader(Paths.get(path.toString(), "pack.json"));
        JsonObject jsonObject = GSON.fromJson(br, JsonObject.class);
        br.close();
        if (jsonObject.has("icon") && jsonObject.get("icon").isJsonPrimitive())
            icon = Objects.requireNonNull(Material.getMaterial(jsonObject.get("icon").getAsString()));
        jsonObject.getAsJsonArray("dependencies").forEach(jsonElement -> dependencies.add(jsonElement.getAsString()));
        var itemsPath = Paths.get(path.toString(), "items");
        Files.walk(itemsPath).filter(Files::isRegularFile).forEach(current -> {
            try {
                items.add(Objects.requireNonNull(getGenerator(current, ItemAsset.class)).loadAsset(new PackObject(getName(), FileUtils.getFileName(itemsPath.relativize(current))), GSON.fromJson(Files.readString(current), JsonObject.class)));
            } catch (IOException e) {
                e.printStackTrace();
            }
        });

        var blocksPath = Paths.get(path.toString(), "blocks");
        Files.walk(blocksPath).filter(Files::isRegularFile).forEach(current -> {
            try {
                blocks.add(Objects.requireNonNull(getGenerator(current, BlockAsset.class)).loadAsset(new PackObject(getName(), FileUtils.getFileName(blocksPath.relativize(current))), GSON.fromJson(Files.readString(current), JsonObject.class)));
            } catch (IOException e) {
                e.printStackTrace();
            }
        });

        var modelsPath = Paths.get(path.toString(), "models");
        Files.walk(modelsPath).filter(Files::isRegularFile).forEach(current -> {
            try {
                models.add(Objects.requireNonNull(getGenerator(current, ModelAsset.class)).loadAsset(new PackObject(getName(), FileUtils.getFileName(modelsPath.relativize(current))), GSON.fromJson(Files.readString(current), JsonObject.class)));
            } catch (IOException e) {
                e.printStackTrace();
            }
        });

        var texturesPath = Paths.get(path.toString(), "textures");
        Files.walk(texturesPath).filter(Files::isRegularFile).forEach(current -> {
            try {
                var fileName = FileUtils.getFileName(texturesPath.relativize(current));
                textures.add(Objects.requireNonNull(getGenerator(current, TextureAsset.class)).loadAsset(new PackObject(getName(), fileName), GSON.fromJson(Files.readString(current), JsonObject.class)));
            } catch (IOException e) {
                e.printStackTrace();
            }
        });
        editable = true;
    }


    @Nullable
    private <T extends PackAsset> CustomAssetGenerator<T> getGenerator(Path path, Class<T> assetClass) {
        BufferedReader br;
        try {
            br = Files.newBufferedReader(path);
            var jsonObject = GSON.fromJson(br, JsonObject.class);
            var generator = jsonObject.get("generator").getAsString();
            br.close();
            return new PackObject(generator).getGeneratorByType(assetClass);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public @NotNull List<String> getDependencies() {
        return Collections.unmodifiableList(dependencies);
    }

    public void registerDependency(@NotNull String name) {
        if (PackObject.NAME_PATTERN.matcher(name).matches())
            dependencies.add(name);
    }

    public void unregisterDependency(String name) {
        dependencies.removeIf(dependency -> dependency.equals(name));
    }

    public @NotNull List<ItemAsset> getItems() {
        return Collections.unmodifiableList(items);
    }

    public void registerItem(@NotNull ItemAsset itemAsset) {
        if (PackObject.NAME_PATTERN.matcher(itemAsset.getName()).matches())
            items.add(itemAsset);
    }

    public void unregisterItem(String name) {
        items.removeIf(itemAsset -> itemAsset.getName().equals(name));
    }

    public @NotNull List<BlockAsset> getBlocks() {
        return Collections.unmodifiableList(blocks);
    }

    public void registerBlock(@NotNull BlockAsset blockAsset) {
        if (PackObject.NAME_PATTERN.matcher(blockAsset.getName()).matches())
            blocks.add(blockAsset);
    }

    public void unregisterBlock(String name) {
        blocks.removeIf(blockAsset -> blockAsset.getName().equals(name));
    }

    public @NotNull List<TextureAsset> getTextures() {
        return Collections.unmodifiableList(textures);
    }

    public void registerTexture(@NotNull TextureAsset textureAsset) {
        if (PackObject.NAME_PATTERN.matcher(textureAsset.getName()).matches())
            textures.add(textureAsset);
    }

    public void unregisterTexture(String name) {
        textures.removeIf(textureAsset -> textureAsset.getName().equals(name));
    }

    public @NotNull List<ModelAsset> getModels() {
        return Collections.unmodifiableList(models);
    }

    public void registerModel(@NotNull ModelAsset modelAsset) {
        if (PackObject.NAME_PATTERN.matcher(modelAsset.getName()).matches())
            models.add(modelAsset);
    }

    public void unregisterModel(String name) {
        models.removeIf(modelAsset -> modelAsset.getName().equals(name));
    }

    public @NotNull List<CustomTemplate> getTemplates() {
        return Collections.unmodifiableList(templates);
    }

    public void registerTemplate(@NotNull CustomTemplate customTemplate) {
        if (PackObject.NAME_PATTERN.matcher(customTemplate.getName()).matches())
            templates.add(customTemplate);
    }

    public void unregisterTemplate(String name) {
        templates.removeIf(templateAsset -> templateAsset.getName().equals(name));
    }

    public @NotNull List<CustomAssetGenerator<ItemAsset>> getItemGenerators() {
        return Collections.unmodifiableList(itemGenerators);
    }

    public void registerItemGenerator(@NotNull CustomAssetGenerator<ItemAsset> generator) {
        if (PackObject.NAME_PATTERN.matcher(generator.getName()).matches())
            itemGenerators.add(generator);
    }

    public void unregisterItemGenerator(String name) {
        itemGenerators.removeIf(generator -> generator.getName().equals(name));
    }

    public @NotNull List<CustomAssetGenerator<BlockAsset>> getBlockGenerators() {
        return Collections.unmodifiableList(blockGenerators);
    }

    public void registerBlockGenerator(@NotNull CustomAssetGenerator<BlockAsset> generator) {
        if (PackObject.NAME_PATTERN.matcher(generator.getName()).matches())
            blockGenerators.add(generator);
    }

    public void unregisterBlockGenerator(String name) {
        blockGenerators.removeIf(generator -> generator.getName().equals(name));
    }

    public @NotNull List<CustomAssetGenerator<TextureAsset>> getTextureGenerators() {
        return Collections.unmodifiableList(textureGenerators);
    }

    public void registerModelGenerator(@NotNull CustomAssetGenerator<ModelAsset> generator) {
        if (PackObject.NAME_PATTERN.matcher(generator.getName()).matches())
            modelGenerators.add(generator);
    }

    public void unregisterModelGenerator(String name) {
        modelGenerators.removeIf(generator -> generator.getName().equals(name));
    }

    public void registerTextureGenerator(@NotNull CustomAssetGenerator<TextureAsset> generator) {
        if (PackObject.NAME_PATTERN.matcher(generator.getName()).matches())
            textureGenerators.add(generator);
    }

    public void unregisterTextureGenerator(String name) {
        textureGenerators.removeIf(generator -> generator.getName().equals(name));
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isEditable() {
        return editable;
    }

    public @NotNull ItemStack getIcon() {
        return new ItemStack(icon);
    }

    public void setIcon(@NotNull Material icon) {
        this.icon = icon;
    }

    @Nullable
    public BlockAsset getBlock(String name) {
        return blocks.stream().filter(blockAsset -> blockAsset.getName().equals(name)).findFirst().orElse(null);
    }

    @Nullable
    public ItemAsset getItem(String name) {
        return items.stream().filter(packItem -> packItem.getName().equals(name)).findFirst().orElse(null);
    }

    @Nullable
    public ModelAsset getModel(String name) {
        return models.stream().filter(modelAsset -> modelAsset.getName().equals(name)).findFirst().orElse(null);
    }

    @Nullable
    public TextureAsset getTexture(String name) {
        return textures.stream().filter(textureAsset -> textureAsset.getName().equals(name)).findFirst().orElse(null);
    }

    @Nullable
    public CustomAssetGenerator<ItemAsset> getItemGenerator(String name) {
        return itemGenerators.stream().filter(generator -> generator.getName().equals(name)).findFirst().orElse(null);
    }

    @Nullable
    public CustomAssetGenerator<BlockAsset> getBlockGenerator(String name) {
        return blockGenerators.stream().filter(generator -> generator.getName().equals(name)).findFirst().orElse(null);
    }

    @Nullable
    public CustomAssetGenerator<ModelAsset> getModelGenerator(String name) {
        return modelGenerators.stream().filter(generator -> generator.getName().equals(name)).findFirst().orElse(null);
    }

    @Nullable
    public CustomAssetGenerator<TextureAsset> getTextureGenerator(String name) {
        return textureGenerators.stream().filter(generator -> generator.getName().equals(name)).findFirst().orElse(null);
    }

    void save(@NotNull Path path) throws IOException {
        JsonObject jsonObject = new JsonObject();
        jsonObject.add("icon", new JsonPrimitive(icon.name()));
        var dependenciesArray = new JsonArray();
        dependencies.forEach(dependenciesArray::add);
        jsonObject.add("dependencies", dependenciesArray);
        jsonObject.addProperty("version", ItemMods.FILE_VERSION);
        Files.writeString(Paths.get(path.toString(), "pack.json"), GSON.toJson(jsonObject));

        var itemsDir = Paths.get(path.toString(), "items");
        if (!Files.exists(itemsDir))
            Files.createDirectories(itemsDir);
        items.stream().filter(itemAsset -> itemAsset instanceof DefinedPackAsset).forEach(itemAsset -> {
            var current = ((DefinedPackAsset) itemAsset).save(getName());
            try {
                var currentPath = Paths.get(itemsDir.toString(), itemAsset.getName() + ".json");
                Files.createDirectories(currentPath.getParent());
                Files.writeString(currentPath, GSON.toJson(current));
            } catch (IOException e) {
                e.printStackTrace();
            }
        });

        var blocksDir = Paths.get(path.toString(), "blocks");
        if (!Files.exists(blocksDir))
            Files.createDirectories(blocksDir);
        blocks.stream().filter(blockAsset -> blockAsset instanceof DefinedPackAsset).forEach(blockAsset -> {
            var current = ((DefinedPackAsset) blockAsset).save(getName());
            try {
                var currentPath = Paths.get(blocksDir.toString(), blockAsset.getName() + ".json");
                Files.createDirectories(currentPath.getParent());
                Files.writeString(currentPath, GSON.toJson(current));
            } catch (IOException e) {
                e.printStackTrace();
            }
        });

        var texturesDir = Paths.get(path.toString(), "textures");
        if (!Files.exists(texturesDir))
            Files.createDirectories(texturesDir);
        textures.stream().filter(textureAsset -> textureAsset instanceof DefinedPackAsset).forEach(textureAsset -> {
            var current = ((DefinedPackAsset) textureAsset).save(getName());
            try {
                var currentPath = Paths.get(texturesDir.toString(), textureAsset.getName() + ".json");
                Files.createDirectories(currentPath.getParent());
                Files.writeString(Paths.get(texturesDir.toString(), textureAsset.getName() + ".json"), GSON.toJson(current));
            } catch (IOException e) {
                e.printStackTrace();
            }
        });

        var modelsDir = Paths.get(path.toString(), "models");
        if (!Files.exists(modelsDir))
            Files.createDirectories(modelsDir);
        models.stream().filter(modelAsset -> modelAsset instanceof DefinedPackAsset).forEach(modelAsset -> {
            var current = ((DefinedPackAsset) modelAsset).save(getName());
            try {
                var currentPath = Paths.get(modelsDir.toString(), modelAsset.getName() + ".json");
                Files.createDirectories(currentPath.getParent());
                Files.writeString(currentPath, GSON.toJson(current));
            } catch (IOException e) {
                e.printStackTrace();
            }
        });
    }

    public void export(String variation, int packFormat, @NotNull Path path) throws IOException {
        for (ModelAsset model : models) model.export(getName(), variation, packFormat, path);
        for (TextureAsset texture : textures) texture.export(getName(), variation, packFormat, path);
    }

    public CustomTemplate getTemplate(String name) {
        return templates.stream().filter(packItem -> packItem.getName().equals(name)).findFirst().orElse(null);
    }

    @Override
    public void setName(@NotNull String name) throws UnsupportedOperationException {
        if (!NAME_PATTERN.matcher(name).matches())
            throw new UnsupportedOperationException();
        this.name = name;
    }

    @Override
    public @Nullable CommandAction generateAction() {
        return new PackAction(name);
    }
}

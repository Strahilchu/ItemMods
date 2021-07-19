package com.github.codedoctorde.itemmods.pack.asset.raw;

import com.github.codedoctorde.itemmods.pack.PackObject;
import com.google.gson.JsonObject;
import org.bukkit.Material;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.IOException;
import java.net.URL;

public class ModelAsset extends RawAsset {
    private @Nullable Material fallbackTexture = Material.STONE;
    private @Nullable Integer staticModel = null;

    public ModelAsset(String name) {
        super(name);
    }

    public ModelAsset(String name, @NotNull URL url) throws IOException {
        super(name, url);
    }

    public ModelAsset(@NotNull PackObject packObject, @NotNull JsonObject jsonObject) {
        super(packObject, jsonObject);
    }


    public boolean isStatic() {
        return staticModel != null;
    }

    public boolean hasFallbackTexture() {
        return fallbackTexture != null;
    }

    public @Nullable Integer getStaticModel() {
        return staticModel;
    }

    public void setStaticModel(@Nullable Integer staticModel) {
        this.staticModel = staticModel;
    }

    public @Nullable Material getFallbackTexture() {
        return fallbackTexture;
    }

    public void setFallbackTexture(@Nullable Material fallbackTexture) {
        this.fallbackTexture = fallbackTexture;
    }

    public @NotNull Material getIcon() {
        if (fallbackTexture != null)
            return fallbackTexture;
        return Material.ARMOR_STAND;
    }
}

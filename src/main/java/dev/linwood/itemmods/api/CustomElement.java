package dev.linwood.itemmods.api;

import dev.linwood.itemmods.pack.PackObject;
import dev.linwood.itemmods.pack.asset.StaticPackAsset;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public interface CustomElement<T extends StaticPackAsset> {
    @Nullable T getConfig();

    void configure();

    @NotNull String getData();

    void setData(@NotNull String data);

    @Nullable PackObject getPackObject();

    default boolean isCustom() {
        return getPackObject() != null;
    }
}

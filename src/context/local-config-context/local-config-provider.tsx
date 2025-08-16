import React, { useEffect } from 'react';
import type { ScrollAction } from './local-config-context';
import { LocalConfigContext } from './local-config-context';
import type { Theme } from '../theme-context/theme-context';

const themeKey = 'theme';
const scrollActionKey = 'scroll_action';
const showCardinalityKey = 'show_cardinality';
const showFieldAttributesKey = 'show_field_attributes';
const showDependenciesOnCanvasKey = 'show_dependencies_on_canvas';
const showMiniMapOnCanvasKey = 'show_minimap_on_canvas';

export const LocalConfigProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const [theme, setTheme] = React.useState<Theme>(
        (localStorage.getItem(themeKey) as Theme) || 'system'
    );

    const [scrollAction, setScrollAction] = React.useState<ScrollAction>(
        (localStorage.getItem(scrollActionKey) as ScrollAction) || 'pan'
    );

    const [showCardinality, setShowCardinality] = React.useState<boolean>(
        (localStorage.getItem(showCardinalityKey) || 'true') === 'true'
    );

    const [showFieldAttributes, setShowFieldAttributes] =
        React.useState<boolean>(
            (localStorage.getItem(showFieldAttributesKey) || 'true') === 'true'
        );

    const [showDependenciesOnCanvas, setShowDependenciesOnCanvas] =
        React.useState<boolean>(
            (localStorage.getItem(showDependenciesOnCanvasKey) || 'false') ===
                'true'
        );

    const [showMiniMapOnCanvas, setShowMiniMapOnCanvas] =
        React.useState<boolean>(
            (localStorage.getItem(showMiniMapOnCanvasKey) || 'true') === 'true'
        );

    useEffect(() => {
        localStorage.setItem(themeKey, theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem(scrollActionKey, scrollAction);
    }, [scrollAction]);

    useEffect(() => {
        localStorage.setItem(showCardinalityKey, showCardinality.toString());
    }, [showCardinality]);

    useEffect(() => {
        localStorage.setItem(
            showDependenciesOnCanvasKey,
            showDependenciesOnCanvas.toString()
        );
    }, [showDependenciesOnCanvas]);

    useEffect(() => {
        localStorage.setItem(
            showMiniMapOnCanvasKey,
            showMiniMapOnCanvas.toString()
        );
    }, [showMiniMapOnCanvas]);

    return (
        <LocalConfigContext.Provider
            value={{
                theme,
                setTheme,
                scrollAction,
                setScrollAction,
                showCardinality,
                setShowCardinality,
                showFieldAttributes,
                setShowFieldAttributes,
                showDependenciesOnCanvas,
                setShowDependenciesOnCanvas,
                showMiniMapOnCanvas,
                setShowMiniMapOnCanvas,
            }}
        >
            {children}
        </LocalConfigContext.Provider>
    );
};

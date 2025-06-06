import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TabsModule } from 'primeng/tabs';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { ReversedKeysDoc } from '../splitbutton/reversedkeysdoc';
import { ArchitectureDoc } from './architecturedoc';
import { BootstrapDoc } from './bootstrapdoc';
import { ColorsDoc } from './colorsdoc';
import { ComponentDoc } from './componentdoc';
import { DarkModeDoc } from './darkmodedoc';
import { DefinePresetDoc } from './definepresetdoc';
import { DtDoc } from './dtdoc';
import { ExtendDoc } from './extenddoc';
import { FocusRingDoc } from './focusringdoc';
import { FontDoc } from './fontdoc';
import { FormsDoc } from './formsdoc';
import { LibrariesDoc } from './librariesdoc';
import { NoirDoc } from './noirdoc';
import { OptionsDoc } from './optionsdoc';
import { PaletteDoc } from './palettedoc';
import { PresetsDoc } from './presetsdoc';
import { PrimaryDoc } from './primarydoc';
import { ResetDoc } from './resetdoc';
import { ScaleDoc } from './scaledoc';
import { ScopedTokensDoc } from './scopedtokensdoc';
import { SpecificityDoc } from './specificitydoc';
import { SurfaceDoc } from './surfacedoc';
import { TailwindDoc } from './tailwinddoc';
import { ThemeDoc } from './themedoc';
import { UpdatePresetDoc } from './updatepresetdoc';
import { UpdatePrimaryPaletteDoc } from './updateprimarypalettedoc';
import { UpdateSurfacePaletteDoc } from './updatesurfacepalettedoc';
import { UsePresetDoc } from './usepresetdoc';

@NgModule({
    imports: [CommonModule, RouterModule, TabsModule, AppCodeModule, AppDocModule, ButtonModule, PanelModule, ToggleSwitch, FormsModule],
    declarations: [
        ArchitectureDoc,
        BootstrapDoc,
        ColorsDoc,
        ComponentDoc,
        ExtendDoc,
        DarkModeDoc,
        DefinePresetDoc,
        DtDoc,
        FocusRingDoc,
        FontDoc,
        FormsDoc,
        LibrariesDoc,
        NoirDoc,
        OptionsDoc,
        PaletteDoc,
        PresetsDoc,
        PrimaryDoc,
        ResetDoc,
        ReversedKeysDoc,
        ScaleDoc,
        ScopedTokensDoc,
        SpecificityDoc,
        TailwindDoc,
        ThemeDoc,
        UpdatePresetDoc,
        UpdatePrimaryPaletteDoc,
        UpdateSurfacePaletteDoc,
        UsePresetDoc,
        SurfaceDoc
    ],
    exports: [
        AppDocModule,
        ArchitectureDoc,
        BootstrapDoc,
        ColorsDoc,
        ComponentDoc,
        ExtendDoc,
        DarkModeDoc,
        DefinePresetDoc,
        DtDoc,
        FocusRingDoc,
        FontDoc,
        FormsDoc,
        LibrariesDoc,
        NoirDoc,
        OptionsDoc,
        PaletteDoc,
        PresetsDoc,
        PrimaryDoc,
        ResetDoc,
        ReversedKeysDoc,
        ScaleDoc,
        ScopedTokensDoc,
        SpecificityDoc,
        TailwindDoc,
        ThemeDoc,
        UpdatePresetDoc,
        UpdatePrimaryPaletteDoc,
        UpdateSurfacePaletteDoc,
        UsePresetDoc,
        SurfaceDoc
    ]
})
export class ThemingDocModule {}

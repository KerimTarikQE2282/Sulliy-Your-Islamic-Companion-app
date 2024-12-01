/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/IslamicAi` | `/IslamicAi`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Prayers` | `/Prayers`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Profile` | `/Profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Quran` | `/Quran`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | ``; params?: Router.UnknownInputParams; } | { pathname: `/HomeTouchables/Athkar`; params?: Router.UnknownInputParams; } | { pathname: `/HomeTouchables/Duas`; params?: Router.UnknownInputParams; } | { pathname: `/HomeTouchables/Qiblah`; params?: Router.UnknownInputParams; } | { pathname: `/HomeTouchables/Tasbih`; params?: Router.UnknownInputParams; } | { pathname: `/HomeTouchables/Tracker`; params?: Router.UnknownInputParams; } | { pathname: `/HomeTouchables/Athkars/MorningAthkars`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/IslamicAi` | `/IslamicAi`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Prayers` | `/Prayers`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Profile` | `/Profile`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Quran` | `/Quran`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | ``; params?: Router.UnknownOutputParams; } | { pathname: `/HomeTouchables/Athkar`; params?: Router.UnknownOutputParams; } | { pathname: `/HomeTouchables/Duas`; params?: Router.UnknownOutputParams; } | { pathname: `/HomeTouchables/Qiblah`; params?: Router.UnknownOutputParams; } | { pathname: `/HomeTouchables/Tasbih`; params?: Router.UnknownOutputParams; } | { pathname: `/HomeTouchables/Tracker`; params?: Router.UnknownOutputParams; } | { pathname: `/HomeTouchables/Athkars/MorningAthkars`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/IslamicAi${`?${string}` | `#${string}` | ''}` | `/IslamicAi${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Prayers${`?${string}` | `#${string}` | ''}` | `/Prayers${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Profile${`?${string}` | `#${string}` | ''}` | `/Profile${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Quran${`?${string}` | `#${string}` | ''}` | `/Quran${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `${`?${string}` | `#${string}` | ''}` | `/HomeTouchables/Athkar${`?${string}` | `#${string}` | ''}` | `/HomeTouchables/Duas${`?${string}` | `#${string}` | ''}` | `/HomeTouchables/Qiblah${`?${string}` | `#${string}` | ''}` | `/HomeTouchables/Tasbih${`?${string}` | `#${string}` | ''}` | `/HomeTouchables/Tracker${`?${string}` | `#${string}` | ''}` | `/HomeTouchables/Athkars/MorningAthkars${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/IslamicAi` | `/IslamicAi`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Prayers` | `/Prayers`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Profile` | `/Profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Quran` | `/Quran`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | ``; params?: Router.UnknownInputParams; } | { pathname: `/HomeTouchables/Athkar`; params?: Router.UnknownInputParams; } | { pathname: `/HomeTouchables/Duas`; params?: Router.UnknownInputParams; } | { pathname: `/HomeTouchables/Qiblah`; params?: Router.UnknownInputParams; } | { pathname: `/HomeTouchables/Tasbih`; params?: Router.UnknownInputParams; } | { pathname: `/HomeTouchables/Tracker`; params?: Router.UnknownInputParams; } | { pathname: `/HomeTouchables/Athkars/MorningAthkars`; params?: Router.UnknownInputParams; };
    }
  }
}
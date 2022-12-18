import { VueReactiveAdapterResult, useReactive } from "@cfcs/vue3";
import { SceneOptions, SceneReactiveData, SCENE_REACTIVE } from "scenejs";


/**
 * To access the state in Vue you need to add $ prefix.
 * @typedef
 * @memberof Vue3Scene
 * @extends Reactive.AnimatorReactiveState
 */
export interface VueSceneResult extends VueReactiveAdapterResult<typeof SCENE_REACTIVE> { }


/**
 * @memberof Vue3Scene
 * @param {Reactive.SceneReactiveData} - Items and properties that make up the scene
 * @param - Scene and Animator options
 * @return - You can use Scene methods and Animator State
 * @example
 * import { useScene, useNowFrame } from "vue-scenejs";
 *
 * const scene = useScene({ ... });
 * const { cssText } = useNowFrame(scene.getItem("a1"));
 *
 * console.log(cssText.value);
 */
export function useScene(props?: SceneReactiveData, options?: Partial<SceneOptions>): VueSceneResult {
    return useReactive({
        ...SCENE_REACTIVE,
        data() {
            return {
                props,
                options,
            };
        },
    });
}
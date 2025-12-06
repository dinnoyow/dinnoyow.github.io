declare class FollowPosition {
    /**
     * X Value of Position
     * @type number
     */
    x: number;
    /**
     * Y Value of Position
     * @type number
     */
    y: number;
    /**
     * Z Value of Position
     * @type number
     */
    z: number;
    /**
     * Constructor
     * @param {number} x
     * @param {number} y
     * @param {number} z (optional)
     */
    constructor(x: number, y: number, z?: number);
}

/**
 * Object with all the settings in it.
 * The values may be overwritten
 */
declare class FollowOptions {
    /**
     * The factor how much the element moves with your cursor
     * @type {number}
     */
    factor: number;
    /**
     * The attribute for the elements you want to follow
     * @type {string}
     */
    attribute: string;
    /**
     * If the object should automatically initiate the script on initialization of the class
     * @type {boolean}
     */
    initiate: boolean;
    /**
     * If debug mode is activated with log messages and visual helpers
     * @type {boolean}
     */
    debug: boolean;
}

declare class FollowElement {
    /**
     * The HTML target of the Follow Element
     * @type HTMLElement
     */
    target: HTMLElement;
    /**
     * The factor which defines how fast the element follows
     * @type number
     */
    factor: number;
    /**
     * The position of the element
     * @type FollowPosition
     */
    position: FollowPosition;
    /**
     * The current translate property
     * @type string
     */
    translate: string;
    /**
     * The options of the follow instances
     * @type {string}
     */
    options: FollowOptions;
    /**
     * Constructor
     * @param {HTMLElement} target
     * @param {FollowOptions} options
     */
    constructor(target: HTMLElement, options: FollowOptions);
    /**
     * Get position of target to calculate translate values
     * @return {FollowPosition}
     */
    getPosition(): FollowPosition;
    /**
     * Update the position of the element
     */
    updatePosition(): void;
    /**
     * Replace the new translate property with the old one
     * @param {FollowPosition} position
     */
    setTranslate(position: FollowPosition): void;
}

declare class Follow {
    /**
     * The options for the follow script
     * @type {FollowOptions}
     */
    options: FollowOptions;
    /**
     * Array where all the elements are stored in
     * @type Array<FollowElement>
     */
    elements: Array<FollowElement>;
    /**
     * Position of the Mouse to use to calculate
     * @type {FollowPosition}
     */
    mouse: FollowPosition;
    /**
     * Current scroll position to use to calculate
     * @type {FollowPosition}
     */
    scroll: FollowPosition;
    /**
     * Constructor
     * @param {object} options
     */
    constructor(options?: any);
    /**
     * Initiate the script
     * Get all elements with the given attribute and activate the animation
     */
    initiate(): void;
    /**
     * Destroy the script
     * Remove all elements and set them to their normal position
     */
    destroy(): void;
    /**
     * Destroy the script and initiate it again with the same options
     */
    refresh(): void;
    /**
     * Set FollowOptions if they have been passed in the object initialization
     * @param {object} options
     */
    setOptions(options: any): void;
    /**
     * Animate the element
     * @param context
     */
    private static animate;
    /**
     * Update the correct current mouse position
     * @param {FollowPosition} position
     * @param context
     */
    private static updateMousePosition;
    /**
     * Update the correct current scroll position
     * @param {FollowPosition} position
     * @param context
     */
    private static updateScrollPosition;
}

export { Follow as default };

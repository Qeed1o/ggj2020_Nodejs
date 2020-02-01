export function UpdateAction(body: any): Object {
    const enum actions {
        Move = "move",
        Rotate = "rotate"
    }

    const PipesRotationArray: Array<number> = [0, 90, 180, 270];
    let response: Object;

    switch (body.action) {
        case actions.Move:
            console.log(`[UpdateAction]: ${body.fromRow} - ${body.fromCol} / ${body.toRow} - ${body.toCol}`)
            break;

        case actions.Rotate:
            const newRotation: number = 
                body.prevRotation + 1 % PipesRotationArray.length;
            console.log(`[UpdateAction]: ${PipesRotationArray[parseInt(body.prevRotation)]} - ${PipesRotationArray[newRotation]}`);
            break;
    }
    return { "fuck_you": "yes" };
}
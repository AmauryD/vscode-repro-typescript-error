export function ParameterDecoratorName() {
    return function(target: any, methodKey: string | symbol, parameterIndex: number) {
        
    }
}

class InjectMe {
    constructor(
        @ParameterDecoratorName() param: unknown
    ) {}
}
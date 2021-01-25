declare namespace IHomePage {
    export interface IProps {}
    export interface IStateProps<T> {
        isFetching: boolean;
        data: T;
        errors: T;
    }

    namespace Actions {
        export interface IMapPayload {}

        export interface IMapResponse {}
    }
}

export { IHomePage };

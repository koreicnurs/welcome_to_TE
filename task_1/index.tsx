import React, { Component, memo } from 'react';

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

// функциональный компонент с мемоизацией
const FirstComponent = memo(({ name, age }: IUser) => (
    <div>
        my name is {name}, my age is {age}
    </div>
));

// функциональный компонент с мемоизацией
const SecondComponent = memo(({ user: { name, age } }: IProps) => (
    <div>
        my name is {name}, my age is {age}
    </div>
));

// классовый компонент с использованием shouldComponentUpdate
class ThirdComponent extends Component<IUser> {
    shouldComponentUpdate(nextProps: IUser) {
        return nextProps.name !== this.props.name || nextProps.age !== this.props.age;
    }

    render() {
        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        )
    }
}

// классовый компонент с использованием shouldComponentUpdate
class FourthComponent extends Component<IProps> {
    shouldComponentUpdate(nextProps: IProps) {
        return nextProps.user !== this.props.user;
    }

    render() {
        const { name, age } = this.props.user;
        return (
            <div>
                my name is {name}, my age is {age}
            </div>
        )
    }
}

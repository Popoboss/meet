//src/__tests__/NumberOfEvents.test.js



import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => { }} />);
    });


    test("renders the component", () => {
        expect(NumberOfEventsWrapper).toBeDefined();
    });


    test('user sees 32 events by default', () => {
        expect(NumberOfEventsWrapper.state('number')).toBe(32);
    })


    test('renders input correctly', () => {
        const number = NumberOfEventsWrapper.state('number');
        expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(number);
    });


    test('change state when user input changes', () => {
        NumberOfEventsWrapper.setState({
            number: '32'
        });
        const eventNumber = { target: { value: '10' } };
        NumberOfEventsWrapper.find('.number').simulate('change', eventNumber);
        expect(NumberOfEventsWrapper.state('number')).toBe('10');
    });


    test('rendered number of events is equal to the users input', () => {
        const RenderedNumberOfEvents = shallow(
            <NumberOfEvents number={10} updateNumberOfEvents={() => { }} />
        );
        expect(RenderedNumberOfEvents.state('number')).toBe(10);
    });

});
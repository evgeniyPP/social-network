import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatusClass";

describe("ProfileStatus", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatus status="Hello test" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Hello test");
  });
  
  test("span should be displayed", () => {
    const component = create(<ProfileStatus status="Hello test" />);
    let span = component.root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("span should be w/ correct status", () => {
    const component = create(<ProfileStatus status="Hello test" />);
    const span = component.root.findByType("span");
    expect(span.children[0]).toBe("Hello test");
  });

  test("input should not be displayed", () => {
    const component = create(<ProfileStatus status="Hello test" />);
    expect(() => {
      let input = component.root.findByType("input");
    }).toThrow();
  });

  test("input should be displayed on editMode", () => {
    const component = create(<ProfileStatus status="Hello test" />);
    const span = component.root.findByType("span");
    span.props.onDoubleClick();
    let input = component.root.findByType("input");
    expect(input).toBeTruthy();
    expect(input.props.value).toBe("Hello test");
  });
  
  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="Hello test" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});

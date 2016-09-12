# IPropertyPaneButtonProps interface










### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`ariaDescription`      | `string` | Besides the compound button,other button types will need more information provided to screen reader |
|`ariaLabel`      | `string` | The aria label of the button for the benefit of screen readers |
|`buttonType`      | [`PropertyPaneButtonType`](propertypanebuttontype.md) | The type of button to render |
|`description`      | `string` | Only used for compound buttons |
|`disabled`      | `boolean` | Whether the button is disabled |
|`icon`      | `string` | The button icon shown in command or hero type |
|`onClick`      | `function` |   A callback which is invoked on the button click, which takes in the existing value for the bound property  and returns the new value and which is then used to update the properties bag |
|`text`      | `string` | Display text of the element |




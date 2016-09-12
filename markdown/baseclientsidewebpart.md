# BaseClientSideWebPart `<TProperties>` class



_Type parameters: `<TProperties>`_

Please refer to the documentation of the individual APIs to make the right decision. 
This abstract class implements the the base functionality for a client side web part. Every client side web part 
needs to inherit from this class. Along with the base functionality, this class provides some APIs that can be 
used by the web part. These APIs fall in two catagories. 
 
The first category of APIs provide data and functionality. Example, the web part context (i.e. this.context). This 
API should be used to access contextual data relevant to this web part instance. 
 
The second category of APIs provide a base implementation for the web part lifecycle and can be overridden for an 
updated implementation. The render() API is the only API that is mandatory to be implemented/overridden by a web 
part. All other life cycle APIs have a base implementation and can be overridden based on the needs of the web part. 
Please refer to the documentation of the individual APIs to make the right decision.



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`protected`     | `null` | `boolean` | _Read-only._   This property indicates whether the web part has been rendered once or not |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`IWebPartContext`](iwebpartcontext.md) |   Constructor for the BaseClientSideWebPart class |
|[`clearError`](#clearerror)     | `protected` | `void` | This API should be used to clear the error message from the web part display area |
|[`configureStart`](#configurestart)     | `protected` | `void` |   This API should be used to invoke the PropertyPane to help configure the web part |
|[`deserialize`](#deserialize)     | `protected` | `TProperties` |   This API is called once during the lifetime of the web part during the intial render and just before the onInit  API call |
|[`dispose`](#dispose)     | `protected` | `void` | resources that the web part is holding onto |
|[`onBeforeSerialize`](#onbeforeserialize)     | `protected` | [`IHtmlProperties`](ihtmlproperties.md) |   This API is called before a web part is serialized |
|[`onDisplayModeChanged`](#ondisplaymodechanged)     | `protected` | `void` |   This API is called when the display mode of a web part is changed |
|[`onInit<T>`](#oninit<t>)     | `protected` | [`Promise<T>`](promise.md) | This API is called only once during the lifecycle of a web part |
|[`onPropertyChange`](#onpropertychange)     | `protected` | `void` |   This API is invoked on property changes in the PropertyPane when the PropertyPane is being used in Reactive mode |
|[`onPropertyConfigurationComplete`](#onpropertyconfigurationcomplete)     | `protected` | `void` |   This API is called when the current web part configuration process is completed |
|[`onPropertyPaneRendered`](#onpropertypanerendered)     | `protected` | `void` | This API is involed when the PropertyPane is rendered |
|[`onPropertyPaneSave`](#onpropertypanesave)     | `protected` | `void` | Non-Reactive mode |
|[`render`](#render)     | `public` | `void` | required to override this API |
|[`renderError`](#rendererror)     | `protected` | `void` |   This API should be used to render an error message in the web part display area |




### constructor

 
Constructor for the BaseClientSideWebPart class. 
If a sub class overrides the constructor, it needs to call super(context) as the first line of its constructor. 


#### Signature
`constructor(ctx: IWebPartContext)`

#### Returns
[`IWebPartContext`](iwebpartcontext.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `ctx`    | [`IWebPartContext`](iwebpartcontext.md) |  |


### clearError

This API should be used to clear the error message from the web part display area. 
This API should be used to clear the error message from the web part display area.

#### Signature
`clearError(): void`

#### Returns
`void`


#### Parameters
None


### configureStart

 
This API should be used to invoke the PropertyPane to help configure the web part. 


#### Signature
`configureStart(refreshOnly?: boolean): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `refreshOnly`    | `boolean` | _Optional._ |


### deserialize

 
This API is called once during the lifetime of the web part during the intial render and just before the onInit 
API call. The purpose of this API is to help a web part developer deserialize the web part data and manage the 
versioning of their data as the web part code evolves. The web part data may have been persisted with an older 
or newer version of the web part code. This API gives the web part developer an opportunity to re-structure their 
data to the appropriate data schema. The persisted data contains the version number information. That information 
can be used to make decisions on how to re-structure the data. 


#### Signature
`deserialize(data: IWebPartData): TProperties`

#### Returns
`TProperties`
- web part property bag. 
This API is called once during the lifetime of the web part during the intial render and just before the onInit 
API call. The purpose of this API is to help a web part developer deserialize the web part data and manage the 
versioning of their data as the web part code evolves. The web part data may have been persisted with an older 
or newer version of the web part code. This API gives the web part developer an opportunity to re-structure their 
data to the appropriate data schema. The persisted data contains the version number information. That information 
can be used to make decisions on how to re-structure the data. 


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `data`    | [`IWebPartData`](iwebpartdata.md) | - web part persisted data |


### dispose

resources that the web part is holding onto. 
This API is called at the end of the web part lifecycle. It should be overridden to dispose any 
resources that the web part is holding onto.

#### Signature
`dispose(): void`

#### Returns
`void`


#### Parameters
None


### onBeforeSerialize

 
This API is called before a web part is serialized. The default implementation is a no-op. A web part developer 
is expected to override this API when the web part's state is not fully reflected in the property bag i.e. 
this.properties. In the overridden method, the web part developer is expected to update the state of the web 
part property bag. This way the web part serialization process will use the upto date state of the web part. 


#### Signature
`onBeforeSerialize(): IHtmlProperties`

#### Returns
[`IHtmlProperties`](ihtmlproperties.md)
- reference to searchable properties and properties that need link fixup. Please read 
This API is called before a web part is serialized. The default implementation is a no-op. A web part developer 
is expected to override this API when the web part's state is not fully reflected in the property bag i.e. 
this.properties. In the overridden method, the web part developer is expected to update the state of the web 
part property bag. This way the web part serialization process will use the upto date state of the web part. 


#### Parameters
None


### onDisplayModeChanged

 
This API is called when the display mode of a web part is changed. The default implementation of this API calls 
the web part render method to re-render the web part with the new display mode. If a web part developer does not 
want a full re-render to happen on display mode change, they can override this API and perform specific updates 
to the web part DOM to switch its display mode. 


#### Signature
`onDisplayModeChanged(oldDisplayMode: DisplayMode): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `oldDisplayMode`    | [`DisplayMode`](displaymode.md) | - The old display mode |


### onInit<T>

This API is called only once during the lifecycle of a web part. 
This API should be overridden to perform long running operations e.g. data fetching from a remote service before 
the initial rendering of the web part. The loading indicator is displayed during the lifetime of this method. 
This API is called only once during the lifecycle of a web part.

#### Signature
`onInit<T>(): Promise<T>`

#### Returns
[`Promise<T>`](promise.md)


#### Parameters
None


### onPropertyChange

 
This API is invoked on property changes in the PropertyPane when the PropertyPane is being used in Reactive mode. 
The base implementation of this API updates the web part property bag and re-render the web part. This API also 
invokes the web part host's setDirty API. 


#### Signature
`onPropertyChange(propertyPath: string,newValue: any): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `propertyPath`    | `string` | - JSON path of the property in the property bag |
| `newValue`    | `any` | - New value of the property |


### onPropertyConfigurationComplete

 
This API is called when the current web part configuration process is completed. ConfigurationComplete event 
is fired when user switches between web parts while the PropertyPane is open, and this event handler is called 
for the previously selected web part. 


#### Signature
`onPropertyConfigurationComplete(): void`

#### Returns
`void`


#### Parameters
None


### onPropertyPaneRendered

This API is involed when the PropertyPane is rendered. 
This API is involed when the PropertyPane is rendered.

#### Signature
`onPropertyPaneRendered(): void`

#### Returns
`void`


#### Parameters
None


### onPropertyPaneSave

Non-Reactive mode. This API is not invoked when the PropertyPane is used in Reactive mode. 
this API is invoked when the the changes are applied on the PropertyPane when the PropertyPane is used in 
Non-Reactive mode. This API is not invoked when the PropertyPane is used in Reactive mode.

#### Signature
`onPropertyPaneSave(): void`

#### Returns
`void`


#### Parameters
None


### render

required to override this API. 
This API is called to render the web part. There is no base implementation of this API and the web part is 
required to override this API.

#### Signature
`render(): void`

#### Returns
`void`


#### Parameters
None


### renderError

 
This API should be used to render an error message in the web part display area. Also logs the error message 
using the trace logger. 


#### Signature
`renderError(error: Error): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `error`    | `Error` | - An error object containing the error message to render |

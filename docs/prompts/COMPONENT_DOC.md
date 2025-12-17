# [Component Name]

[Insert 1-Sentence Description Here]

## Basic Usage

[Component Name] is used to [primary function].

```jsx
<ComponentName value={value} onChange={(e) => setValue(e.value)} />
```

---

## Examples & Variations

### [Variation 1: e.g., Sizes]

[Description of when to use this variation.]

```jsx
<ComponentName size="small" />
<ComponentName size="large" />
```

### [Variation 2: e.g., With Icons]

[Description of how to integrate icons or slots.]

```jsx
<ComponentName icon="search" />
```

### [Variation 3: States]

[Description of validation or interactive states.]

```jsx
<ComponentName disabled />
<ComponentName invalid errorMessage="Field is required" />
```

---

## API Reference

### Properties

| Name      | Type     | Default     | Description                       |
| :-------- | :------- | :---------- | :-------------------------------- |
| `id`      | `string` | `null`      | Unique identifier of the element. |
| `value`   | `any`    | `null`      | Value of the component.           |
| `variant` | `string` | `'primary'` | Visual style of the component.    |

### Events / Callbacks

| Name       | Parameters            | Description                                     |
| :--------- | :-------------------- | :---------------------------------------------- |
| `onChange` | `event: BrowserEvent` | Callback to invoke on value change.             |
| `onFocus`  | `event: BrowserEvent` | Callback to invoke when element receives focus. |

### Slots / Children

| Name      | Description                                      |
| :-------- | :----------------------------------------------- |
| `default` | The content to be rendered inside the component. |
| `header`  | Custom content for the component header.         |

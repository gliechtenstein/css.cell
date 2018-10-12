# css.cell

Construct CSS from JSON, powered by [cell.js](https://github.com/intercellular/cell)

Nesting of objects is supported. Selectors are built
by concatenating property names from parent objects.

Property names that are given as camelCase are converted
to kebab-case.


# Install

Just include the following script

```
<script src="https://gliechtenstein.github.io/css.cell/css.cell.js"></script>
```

# Usage

```
var stylesheet = css( {
 '.top-section': {
   backgroundColor: 'green',
   h1: { color: 'red' },
 },
 '.middle-section' : {
   p: { strong: { color: 'blue' } }
 }
}, { cell: true, scope: '#myElement' } )
```

creates a `<style>` node that looks like this:

```
<style>
#myElement .top-section {
  background-color: green;
}
#myElement .top-section h1 {
  color: red;
}
#myElement .middle-section p strong {
  color: blue;
}
</style>
```

# Demo

Check out the demo at https://play.celljs.org/items/glkfXy/edit

# Syntax

```
css([Style JSON], Options )
```

The first argument is the actual JSON that represents the CSS.

options.cell: Boolean. If true, output will have `$cell: true` property.
options.scope: String. Prepends all css selectors.

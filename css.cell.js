var css = function(o, options={}) {

  var rule = function (o, selectors) {
    var result = ""
    Object.keys(o).forEach( function(property) {
      if ( typeof  o[property] !== "object" ) {
        // Convert property from camelCase to kebab-case
        var kebab =  ( property[0].match(/[A-Z]/) ? "-" : "" ) + property.
          replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
        result += ("\t" + kebab + ": " + o[property] + ";\n")
      }
    } )
    result = result === "" ? "" : selectors.join(" ") + " {\n" + result + "\n}\n"
    return result
  }

  var rules = function (o, selectors) {
    var result = ""
    if ( typeof o === "object" ) {
      result += rule( o, selectors )
      Object.keys(o).forEach( function( selector ) {
        var selected = o[selector]
        selector.split(",").forEach( function( selectorPart ) {
          selectorPart = selectorPart.trim()
          result += rules( selected, selectors.concat( selectorPart ) )
        } )
      } )
    }
    return result
  }

  var stub = {
    $type: "style",
    $text: rules( o, options.scope ? [ options.scope ] : [] )
  }

  if ( options.cell ) { stub.$cell = true; }

  return stub;

}

# Intermediate CSS

## Types of combinations of css selectors

Child:
selector1 > selector2 {}
will select the selector2 that are direct children of selector1

combined:
sel1, sel2 {}
will select all sel1 and/or sel2

descendent:
sel1 sel2 {}
will apply to all sel2 with sel1 as an ancestor

chaining
sel1sel2 {}
applies when all selectors are true, ie h1.header will only apply to h1 with class header

can also combine combiners

sel1 sel2sel3 {}
will apply to elements that are descendents of a sel1 and have the sel2 AND sel3 characteristic

## CSS Positioning

these are set by
elem {
position: <static/relative/absolute/fixed>
}

Static positioning:
The default position

Relative: position set relative to the default position

for instance:
elem {
position: relative;
left 50px;
top 50px;
}
will move the box left and down from the default

Absolute: position relative to the nearest positioned ancestor.. or defaults to the top-left of the webpage

Fixed Positioning: always set to the top left of the browser window, will always stay in that position regardless of the webpage scrolling.

Z index: this determines which element is on top of which in the z-axis, layers... set by a property called z-index

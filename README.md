# jquery-prototype-serializer

jquery-prototype-serializer is a jQuery plugin that allows you to
serialize forms as objects, equivalently to the Prototype
serialize(true) call.  This can be useful when porting front-end code
to jQuery when back-end code expects a serialized object.

To use, simply include the plugin's .js file in your project, and then,
wherever you previously were using:

    $('foo').serialize(true)

You can now instead use:

    $('#foo').serializeToObject()

That's all there is to it!

## Acknowledgements

Thanks to John Newman for robustness improvements to the initial logic.

## Licensing

Copyright 2013 Christopher L. Simons

This code is distributed under the MIT/X Consortium License,
which can be found in the in sole source code file.

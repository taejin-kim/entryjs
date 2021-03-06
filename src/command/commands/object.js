/*
 *
 */
"use strict";

goog.require("Entry.Command");

(function(c) {
    c.selectObject = {
        type: EntryStatic.COMMAND_TYPES.selectObject,
        do: function(objectId) {
            return Entry.container.selectObject(objectId);
        },
        state: function(objectId) {
            var playground = Entry.playground;
            if (playground && playground.object)
                return [playground.object.id];
        },
        log: function(objectId) {
            return [objectId];
        },
        undo: "selectObject"
    };

})(Entry.Command);

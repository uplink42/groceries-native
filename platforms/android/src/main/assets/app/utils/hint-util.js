"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setHintColor(args) {
    var dictionary = new NSDictionary([args.color.ios], [NSForegroundColorAttributeName]);
    args.view.ios.attributedPlaceholder = NSAttributedString.alloc().initWithStringAttributes(args.view.hint, dictionary);
}
exports.setHintColor = setHintColor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGludC11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0Esc0JBQTZCLElBQXVDO0lBQ25FLElBQUksVUFBVSxHQUFHLElBQUksWUFBWSxDQUNoQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQ2hCLENBQUMsOEJBQThCLENBQUMsQ0FDaEMsQ0FBQztJQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDLHdCQUF3QixDQUN6RixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBUEQsb0NBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5cclxuZGVjbGFyZSB2YXIgTlNBdHRyaWJ1dGVkU3RyaW5nOiBhbnk7XHJcbmRlY2xhcmUgdmFyIE5TRGljdGlvbmFyeTogYW55O1xyXG5kZWNsYXJlIHZhciBOU0ZvcmVncm91bmRDb2xvckF0dHJpYnV0ZU5hbWU6IGFueTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRIaW50Q29sb3IoYXJnczogeyB2aWV3OiBUZXh0RmllbGQsIGNvbG9yOiBDb2xvciB9KSB7XHJcblx0bGV0IGRpY3Rpb25hcnkgPSBuZXcgTlNEaWN0aW9uYXJ5KFxyXG5cdFx0W2FyZ3MuY29sb3IuaW9zXSxcclxuXHRcdFtOU0ZvcmVncm91bmRDb2xvckF0dHJpYnV0ZU5hbWVdXHJcblx0KTtcclxuXHRhcmdzLnZpZXcuaW9zLmF0dHJpYnV0ZWRQbGFjZWhvbGRlciA9IE5TQXR0cmlidXRlZFN0cmluZy5hbGxvYygpLmluaXRXaXRoU3RyaW5nQXR0cmlidXRlcyhcclxuXHRhcmdzLnZpZXcuaGludCwgZGljdGlvbmFyeSk7XHJcbn1cclxuIl19
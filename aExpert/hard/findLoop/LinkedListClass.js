"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LL {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    printArray() {
        const result = [];
        let context = this;
        while (context) {
            result.push(context.value);
            context = context.next;
        }
        return result;
    }
}
exports.default = LL;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlua2VkTGlzdENsYXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTGlua2VkTGlzdENsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBcUIsRUFBRTtJQUdyQixZQUFZLEtBQW1CO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxVQUFVO1FBQ1IsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksT0FBTyxHQUFXLElBQUksQ0FBQztRQUMzQixPQUFPLE9BQU8sRUFBRTtZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGO0FBakJELHFCQWlCQyJ9
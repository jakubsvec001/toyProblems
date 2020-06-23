"use strict";
const nodeDepths = (root) => {
    let total = 0;
    if (!root.left) {
        return undefined;
    }
    const traverse = (node, depth) => {
        if (node) {
            depth += 1;
            total += depth;
            [node === null || node === void 0 ? void 0 : node.left, node === null || node === void 0 ? void 0 : node.right].forEach((item) => {
                traverse(item, depth);
            });
        }
    };
    traverse(root, -1);
    return total;
};
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
module.exports = { nodeDepths, BinaryTree };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZURlcHRocy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5vZGVEZXB0aHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVVBLE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBZ0IsRUFBc0IsRUFBRTtJQUMxRCxJQUFJLEtBQUssR0FBVyxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUM7UUFDYixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBdUIsRUFBRSxLQUFhLEVBQVEsRUFBRTtRQUNoRSxJQUFJLElBQUksRUFBRTtZQUNSLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDWCxLQUFLLElBQUksS0FBSyxDQUFDO1lBQ2YsQ0FBQyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsSUFBSSxFQUFFLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDekMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQyxDQUFBO0lBQ0QsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2xCLE9BQU8sS0FBSyxDQUFBO0FBQ2QsQ0FBQyxDQUFBO0FBSUQsTUFBTSxVQUFVO0lBSWQsWUFBbUIsS0FBYTtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0NBQ0Y7QUFJRCxNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFBIn0=
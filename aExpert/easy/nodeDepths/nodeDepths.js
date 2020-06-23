var nodeDepths = function (root) {
    var total = 0;
    var traverse = function (node, depth) {
        if (!node) {
            total += depth;
        }
        depth += 1;
        traverse(node.left, depth);
        traverse(node.right, depth);
    };
    return 1;
};
var BinaryTree = (function () {
    function BinaryTree(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BinaryTree;
}());
var node1 = new BinaryTree(1);
node1.left = new BinaryTree(2);
node1.right = new BinaryTree(3);
node1.left.left = new BinaryTree(4);
node1.left.right = new BinaryTree(5);
node1.left.left.left = new BinaryTree(8);
node1.left.left.right = new BinaryTree(9);
node1.right.left = new BinaryTree(6);
node1.right.right = new BinaryTree(7);
console.log(nodeDepths(node1));
module.exports = { nodeDepths: nodeDepths, BinaryTree: BinaryTree };


define([], function(){

    function ListNode(val){
        this.val = val;
        this.next = null;
    }

    function makeList(array){
        return array.reverse().reduce((acc, cur) => {
            if(acc.head == null){
                acc.head = new ListNode(cur);
                acc.p = acc.head;
            }else{
                acc.p.next = new ListNode(cur);
                acc.p = acc.p.next;
            }
            return acc;
        }, {head:null, p:null}).head;
    }

    ListNode.prototype.toArray = function(){
        var ar = [], pNode = this;
        while(pNode){
            ar.push(pNode.val);
            pNode = pNode.next;
        }
        return ar.reverse();
    }

    function addTwoNumbers(l1, l2){
        var hNode, pNode, carry = 0, pi1 = l1, pi2 = l2;
        for(; pi1 && pi2; pi1 = pi1.next, pi2 = pi2.next){
           
            if(hNode == null){
                pNode = new ListNode();
                hNode = pNode;
            }else{
                pNode.next = new ListNode();
                pNode = pNode.next;
            }

            pNode.val = pi1.val + pi2.val + carry ;
            if(pNode.val > 9){
                carry = 1
                pNode.val = pNode.val % 10;
            }
            else{
                carry = 0;
            }
        }

        pi1 = pi1 || pi2;

        while(pi1){
            pNode.next = new ListNode();
            pNode = pNode.next;
            pNode.val = pi1.val + carry;
            if(pNode.val > 9){
                carry = 1;
                pNode.val %= 10;
            }
            else{
                carry = 0;
            }
            pi1 = pi1.next;
        }

        if(carry){
            pNode.next = new ListNode(carry);
        }

        return hNode;
    }

    console.log(addTwoNumbers(makeList([1]), makeList([2,3,4])).toArray().join('') == '235');
    console.log(addTwoNumbers(makeList([1]), makeList([9,9])).toArray().join('') == '100');
    console.log(addTwoNumbers(makeList([1,2,3]), makeList([3,4,5])).toArray().join('') == '468');
    console.log(addTwoNumbers(makeList([1,2,3]), makeList([1,7,7])).toArray().join('') == '300');
});
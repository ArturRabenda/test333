

function BubbleSort(myTable) {
    for(var i=0; i<myTable.length-1; i++){
        if ( typeof(myTable[i]) === 'string'  )
        {
            return false;
        }
    }
    var change, temp;
    do {
        change = false;
        for(var i=0; i<myTable.length-1; i++) {
            if (myTable[i+1] < myTable[i]) {
                temp = myTable[i];
                myTable[i] = myTable[i+1];
                myTable[i+1] = temp;
                change = true;
            }
        }
    } while (change);
    return myTable;
}

module.exports = {

    BubbleSort: BubbleSort
};

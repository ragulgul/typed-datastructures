/**
 * Created by gul on 4/2/15.
 */

module ts.ds {

    /***
     * Super interface for all collection based data structures.
     */
    export interface ICollection<T> {

        /***
         * Gets the current size of the collection
         */
        size: ()=>number;

        /***
         * Utility method that returns true if there are no items in the collection
         */
        isEmpty: ()=>boolean;

        /***
         * Clears the collection of all items
         */
        clear: ()=>boolean;


        /***
         * Returns true if the item is present in this collection.
         * @param item item to search for
         */
        contains: (item:T)=>boolean;

        /***
         * Utility method to convert this collection to an array of items
         */
        toArray: ()=>Array<T>;
    }

}



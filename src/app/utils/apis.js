/**
 * Created by Andriy on 03.08.2016.
 */

'use strict';
(function() {
    'use strict';

    angular
            .module('moonlite')
            .factory('APIS', APIS);

    /** @ngInject */
    APIS.$inject = ['API_ROOT_URL', '$http'];
    function APIS(API_ROOT_URL, $http) {

        function getAllBooks() {
            return $http.get(API_ROOT_URL + 'books');
        }

        function deleteBook(id) {
            return $http.delete(API_ROOT_URL + 'books/'+ id);
        }

        return {
            getAllBooks: getAllBooks,
            deleteBook: deleteBook
        }
    }
}());

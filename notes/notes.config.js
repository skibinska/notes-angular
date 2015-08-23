angular.module('ev-notes')
    .config(function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'notes/notes.html',
                controller: 'NotesListController'
            }).
            otherwise({
                redirectTo: '/'
            });
    })
;

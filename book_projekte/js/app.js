var app = angular.module("bookview_App", []);
// Variable app definieren

app.controller('bookviewController', ['$scope', function($scope) {
    // AppController definieren 
    
    // --- Eigenschaften festlegen ---
    /** @type {string} */
    $scope.title = 'Bookview';
    // Titel der App festlegen 
    $scope.bookview_data = data;
    // Daten werden aus der Variable data, die in der Datei data.js definiert wird, geladen

    $scope.book_options = [];   
    // leere Liste - alle Bücher
    $scope.book_category_options = [];
    // leere Liste - alle Bücher-Kategorien

    // alle Daten durchlaufen
    $scope.bookview_data.forEach(function(x) { 
        if($scope.book_options.indexOf(x.book) == -1) {
            $scope.book_options.push(x.book);
        };
        // Wenn Buch noch nicht in der book_options-Liste, dann hinzufügen
        if($scope.book_category_options.indexOf(x.category) == -1) {
            $scope.book_category_options.push(x.category);
        }; 
        // Wenn Buchkategorie noch nicht in der book_category_options-Liste, dann hinzufügen
    });

    $scope.book = ["Screencast"];    // Werte: Screencast, Aufgaben, Quiz
    // Buch-Liste - Standard: Screencast
    $scope.category = $scope.book_category_options;
    // Buch-Kategorie-Liste - alle Werte aus der Liste book_category_options übernehmen

    // Datenliste für die Schleife (alle Bücher anzeigen)
    $scope.bookview_data_for_repeat = $scope.bookview_data;

    $scope.change_book = function(book) {
    // Funktion def. - Buch ändern
        $scope.book = [];
        $scope.book.push(book);
    };  // Ende der Funktion change_book

    $scope.change_book_category = function(category) {
    // Funktion def. - Buch-Kategorie ändern
        $scope.category = [];
        $scope.category.push(category);

        // Liste leeren
        $scope.bookview_data_for_repeat = [];

        // ng-if="book.indexOf(book_i.book) != -1 && book_category.indexOf(book_i.book_category) != -1"
        // nur Bücher in die Liste packen die book und book_category entsprechen
        $scope.bookview_data.forEach(function(x) { 
            if($scope.book.indexOf(x.book) != -1 && $scope.category.indexOf(x.category) != -1) {
                $scope.bookview_data_for_repeat.push(x);
            };
        });
        
    };  // Ende der Funktion change_book_category

 
}]);  // Ende vom Controller




$(document).ready(function () {
    var PARSE_APP_ID = "fwiQObD26A4Ne2OiSRXEpb5qlkI0hxiUMShlJDvm";
    var PARSE_REST_API_KEY = "DgipdBcX2pbzJx6pgVY9BIH8p37Ih5Pq0rw25CfX";

    function loadBooks() {
        $.ajax({
            method: "GET",
            headers: {
                "X-Parse-Application-Id": PARSE_APP_ID,
                "X-Parse-REST-API-Key": PARSE_REST_API_KEY
            },
            url: "https://api.parse.com/1/classes/Book"
        }).done(function(data) {
            for (var b in data.results) {
                var book = data.results[b];
                var bookId = book['objectId'];
                var bookItem = $('<li id="' + bookId + '" class="book"' + '>');
                var bookSpan = $('<span>');
                var bookMainBtn = $('<a href="#"' + ' class="bookMainBtn">' + book.author + ' - ' + book.title + '</a><br/>');
                bookMainBtn.appendTo(bookItem);
                var bookBtn = $('<a href="#" title="' + bookId + '"' + ' class="deleteBtn">Delete Book</a>');
                bookBtn.appendTo(bookItem);

                //Generate the form for Editing and HIDE IT
                var divEdit = $('<div>');
                divEdit.attr('class', 'editPanel');
                divEdit.attr('title', bookId);
                var editAuthor = $('<input type="text" id="newAuthor" value="' + book.author +  '"/><br/>');
                editAuthor.appendTo(divEdit);
                var editTitle = $('<input type="text" id="newTitle" value="' + book.title +  '"/><br/>');
                editTitle.appendTo(divEdit);
                var editIsbn = $('<input type="text" id="newIsbn" value="' + book.isbn +  '"/><br/>');
                editIsbn.appendTo(divEdit);
                var editBtn = $('<a href="#" title="' + bookId + '"' + ' class="editBtn">Edit Book</a>');
                editBtn.appendTo(divEdit);
                divEdit.appendTo(bookItem);

                bookItem.appendTo($('#booksList'));
            }

            $('.editPanel').toggle();
            $('.deleteBtn').click(deleteBook);
            $('.bookMainBtn').click(showEditPanel);
            $('.editBtn').click(editBook);

        }).fail(function() {
            alert('Cannot load books.');
        });
    }
    loadBooks();

    $('#addBook').submit(addBook);

    function showEditPanel() {
        $('.editPanel').toggle();
    }

    function editBook() {
        //TODO: Not finished yet
        var newAuthor = $('#newAuthor').val();
        var newTitle = $('#newTitle').val();
        var newIsbn = $('#newIsbn').val();
        var bookId = $(this).attr('title');

        $.ajax({
            method: "PUT",
            headers: {
                "X-Parse-Application-Id": PARSE_APP_ID,
                "X-Parse-REST-API-Key": PARSE_REST_API_KEY,
                "Content-Type": "application/json"
            },
            url: "https://api.parse.com/1/classes/Book/" + bookId,
            data: JSON.stringify(
                {"author": newAuthor, "title": newTitle, "isbn": newIsbn}
            )
        }).done(function (data) {
            alert('Book edited successfully');
            $('li').remove();
            loadBooks();
        }).fail(function () {
            alert('Cannot edit book.');
        });
    }

    function deleteBook(e) {
        e.preventDefault();
            var bookId = $(this).attr('title');
            console.log('Entered deleteBook function');

            $.ajax({
                method: "DELETE",
                headers: {
                    "X-Parse-Application-Id": PARSE_APP_ID,
                    "X-Parse-REST-API-Key": PARSE_REST_API_KEY
                },
                url: "https://api.parse.com/1/classes/Book/" + bookId
            }).done(function (data) {
                alert('Book deleted successfully.');
                $('li').remove();
                loadBooks();
            }).fail(function () {
                alert('Cannot delete book.');
            });
    }

    function addBook (e) {
        e.preventDefault();
        var author = $('#author').val();
        var title = $('#title').val();
        var isbn = $('#isbn').val();
        $.ajax({
            method: "POST",
            headers: {
                "X-Parse-Application-Id": PARSE_APP_ID,
                "X-Parse-REST-API-Key": PARSE_REST_API_KEY,
                "Content-Type": "application/json"
            },
            url: "https://api.parse.com/1/classes/Book",
            data: JSON.stringify(
                {"author": author, "title": title, "isbn": isbn}
            )
        }).done(function (data) {
            console.log('Book added successfully.');
            $('li').remove();
            loadBooks();
        }).fail(function () {
            alert('Cannot add book.');
        });
    }
})

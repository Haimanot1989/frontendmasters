class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	printFavoriteBooks() {
		console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
		for (let bookName of this.favoriteBooks) {
			console.log(bookName);
		}
	}

	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}
}

function loadBooks(bookshelf) {
	// TODO: call fakeAjax( .. );
	fakeAjax(BOOK_API, function onBooks(bookNames){
		bookNames.forEach(bookName => {
			bookshelf.addFavoriteBook(bookName);
		});
		bookshelf.printFavoriteBooks();
	});
}
var BOOK_API = "https://some.url/api";


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

loadBooks(new Bookshelf());
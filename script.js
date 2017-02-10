var moviesArray = [{
        id: 1,
        title: 'Harry Potter i Kamień Filozoficzny',
        desc: 'film o czarodzieju i kamieniu :))',
        posterSrc: 'http://1.fwcdn.pl/po/05/71/30571/7476301.3.jpg'
    }, {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        posterSrc: 'http://1.fwcdn.pl/po/68/78/6878/6954189.3.jpg'
    }, {
        id: 3,
        title: 'Psy',
        desc: 'Film o psach czyli o policji',
        posterSrc: 'http://1.fwcdn.pl/po/11/42/1142/6900155.3.jpg'
    }, {
        id: 4,
        title: 'Miś Uszatek',
        desc: 'Film o misiu z klapniętym uszkiem',
        posterSrc: 'http://1.fwcdn.pl/po/38/72/103872/7367988.3.jpg'
    },
    {
        id: 5,
        title: 'Szósty zmysł',
        desc: 'Takie tam o dzieciaku i duchach',
        posterSrc: 'http://1.fwcdn.pl/po/08/25/825/7559549.3.jpg'
    },
    {
        id: 6,
        title: 'Łowca androidów',
        desc: 'Androidy i ich łowcy',
        posterSrc: 'http://1.fwcdn.pl/po/07/34/734/6935623.3.jpg'
    }
];

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function () {
        return React.createElement('h2', {}, this.props.title);
    }
})

var MovieDescription = React.createClass({
    propTypes: {
        description: React.PropTypes.string.isRequired
    },
    render: function () {
        return React.createElement('p', {}, this.props.description)
    }
})

var MovieImage = React.createClass({
    propTypes: {
        imageSrc: React.PropTypes.string.isRequired
    },
    render: function () {
        return React.createElement('img', {
            src: this.props.imageSrc,
            style: {
                width: '300px'
            }
        })
    }
})

var Movie = React.createClass({
    propTypes: {
        moviesItem: React.PropTypes.object.isRequired
    },
    render: function () {
        return React.createElement('li', {},
            React.createElement(MovieTitle, {
                title: this.props.moviesItem.title
            }),
            React.createElement(MovieDescription, {
                description: this.props.moviesItem.desc
            }),
            React.createElement(MovieImage, {
                imageSrc: this.props.moviesItem.posterSrc
            })
        );
    }
});

var MovieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },
    render: function () {

        var itemsList = this.props.movies.map(function (movie) {
            return React.createElement(Movie, {
                moviesItem: movie,
                key: movie.id
            });
        })
        return React.createElement('ul', {}, itemsList);
    }
})

var element =
    React.createElement('div', {}, React.createElement('h1', {}, 'Lista filmów'), React.createElement(MovieList, {
        movies: moviesArray
    }));

ReactDOM.render(element, document.getElementById('app'));
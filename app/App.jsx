/* eslint-disable no-return-assign */
import React, { lazy, Suspense } from 'react';
import redux from 'REDUX';
// import { imports } from 'fmihel-lazy-load';
import Fallback from './components/Fallback/Fallback.jsx';

const Navbar = lazy(() => import(/* webpackChunkName: "Navbar" */'./components/Navbar/Navbar.jsx'));

class App extends React.Component {
    constructor(p) {
        super(p);
        this.onTheme = this.onTheme.bind(this);
        this.state = {
            menu: [
                { id: 'theme', caption: 'theme', onClick: this.onTheme },
                { id: 'item-2', caption: 'second', active: true },
                { id: 'item-3', caption: 'first' },
            ],
        };
    }

    onTheme() {
        redux.actions.Theme();
    }
    // componentDidMount() {
    // разовый вызов после первого рендеринга
    // }

    // componentWillUnmount() {
    // разовый после последнего рендеринга
    // }

    // componentDidUpdate(prevProps, prevState, prevContext) {
    // каждый раз после рендеринга (кроме первого раза !)
    // }

    render() {
        // const { LazyLoadA, LazyLoadB, LazyLoadD } = this.state;
        const { theme } = this.props;
        const { menu } = this.state;

        return (
            <div className={`app ${theme}`}>
                <Suspense fallback={<Fallback/>}>
                    <Navbar src="./media/logo.png" menu={menu} addClass={theme === 'dark' ? 'navbar-dark bg-secondary' : 'navbar-dark bg-dark text-bg-dark'}/>
                </Suspense>
            </div>
        );
    }
}
App.defaultProps = {
};

const mapStateToProps = (state) => ({
    theme: state.ui.theme,
});

export default redux.connect(mapStateToProps)(App);

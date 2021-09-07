function navbar(display) {
	return `
    <nav id="navigation">
        <div id=""><a href="index.html">Home</a></div>
        <div class="${display}" id="display">
                <form action="">
                    <input type="text" placeholder="Search Your Favorate Dish">
                    <button type="submit">Search</button>
                </form>
                <div id="dropdown">
                    <div>suraj</div>
                    <div>suraj</div>
                    <div>suraj</div>
                    <div>suraj</div>
                    <div>suraj</div>
                    <div>suraj</div>
                    <div>suraj</div>
                    <div>suraj</div>
                    <div>suraj</div>
                    <div>suraj</div>
                    <div>suraj</div>
                    <div>suraj</div>
                </div>
        </div>
        <div class="flex" id="last">
            <div><a href="recipeOfDay.html">Recipe of the Day</a></div>
            <div><a href="latest.html">Latest Recipe</a></div>
            <div>User</div>
        </div>
    </nav>`;
}

export default navbar;

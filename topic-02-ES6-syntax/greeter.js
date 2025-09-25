function make_greeter(season)
{
    return function()
    {
        console.log(`Happy ${season}`);
    }
}

greeter = make_greeter("Easter");
greeter();
greeter = 1;
greeter();
use dep::std;

mod SinType {
    global LUST: Field = 0;
    global GLUTTONY: Field = 1;
    global GREED: Field = 2;
    global SLOTH: Field = 3;
    global WRATH: Field = 4;
    global ENVY: Field = 5;
    global PRIDE: Field = 6;
}

fn main(sins: [u32; 7]) {
    let mut total = 0;
    // Corresponding weights for each sin
    let weights = [5, 2, 3, 2, 1, 1, 1]; 

    for i in 0..sins.len() {
        total += sins[i] * weights[i];
    }
    std::println(total);

    if total < 3 {
        std::println("2 holy mary");
    } else if total < 6 {
        std::println("4 holy mary");
    } else if total < 10 {
        std::println("8 holy mary");
    } else {
        std::println("16 holy mary");
    }
}

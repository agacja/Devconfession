use dep::std;

mod SinType {
    global LustforEndlessCryptocurrencies: Field = 0;
    global GluttonyofSmartContracts: Field = 1;
    global GreedforGasFees: Field = 2;
    global SlothinBlockchainSyncing: Field = 3;
    global WrathAgainstForks: Field = 4;
    global EnvyofEthereumSuccess: Field = 5;
    global PrideinDecentralization: Field = 6;
}

fn main(sins: [u32; 7]) {
    let mut total = 0;
    // Corresponding weights for each sin
    let weights = [5, 1000, 3, 2, 1, 1, 1]; 

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

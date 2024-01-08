use dep::std;

mod SinType {
    global LustforEndlessCryptocurrencies: Field = 0;
    global GluttonyofSmartContracts: Field = 1;
    global GreedforGasFees: Field = 2; // Third sin related to Gas Fees
    global SlothinBlockchainSyncing: Field = 3;
    global WrathAgainstForks: Field = 4;
    global EnvyofEthereumSuccess: Field = 5;
    global PrideinDecentralization: Field = 6;
}

    fn main(sins: [u32; 7]) {
    let mut total = 0;
    // Corresponding weights for each sin
    let weights = [5, 1, 10000, 2, 1, 1, 1]; 

    // Check for the 'Greed for Gas Fees' sin
    if sins[2] != 0 {
        std::println("go to hell");
    } else {
        for i in 0..sins.len() {
            total += sins[i] * weights[i];
        }
        std::println(total);

        if total < 3 {
            std::println("2 hail mary");
        } else if total < 6 {
            std::println("4 hail mary");
        } else if total < 12 {
            std::println("8 hail mary");
        } else {
            std::println("go to hell");
        }
    }
}


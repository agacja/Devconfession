# Devconfession

### Confess your sins via App. No need to go to the church.
### Build for fun using Noir language.

## Contents

```
src
    ├─ main.nr -> The circuit generates a proof verifying whether the user has made a confession
 and determines the number of 'Hail Marys' required based on their confession. Or if you go to hell(?!)
```

### Install

```shell
$ noirup
```

### Check

```shell
$ nargo check
```

### Build Solidity verifier

```shell
$  nargo codegen-verifier
```

### Test

```shell
$ nargo test
```
### Start the App

```shell
$ node server.js
```




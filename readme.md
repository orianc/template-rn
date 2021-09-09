# INSTALL

Use at least node 12

```
nvm use 12
yarn
cd ios && pod install
```

# LAUNCH

## Android :

```
react-native run-android
```

## iOS :

```
react-native run-ios
```

Si cette commande ne fonctionne pas, ouvrir directement le fichier xcworkspace et lancez le projet via Xcode

# Working road

## First issue : On setup, running application failed

`JAVA_HOME` environnement didn't found, i had to set up a new environnement variable system on my pc by following this link bellow
https://stackoverflow.com/questions/48298910/react-native-java-home-is-not-set-and-no-java-command-could-be-found-in-your

`ANDROID_SDK_ROOT`, previously step work, but a new error on run come, try to resolve with https://stackoverflow.com/questions/27620262/sdk-location-not-found-define-location-with-sdk-dir-in-the-local-properties-fil

```bash

FAILURE: Build failed with an exception.
* What went wrong:
Could not determine the dependencies of task ':app:installDebug'.
> SDK location not found. Define location with an ANDROID_SDK_ROOT environment variable or by
setting the sdk.dir path in your project's local properties file at 'E:\Users\orian\Desktop\FrenchAppWeb\template-rn\android\local.properties'.
```

I had to create a new file `android\local.properties` to setup SDK rooting, this root must be changed or comment by dev. This works.

Always during the first run :
`ABD COMMAND IS NOT RECOGNIZED`

```bash
'adb' is not recognized as an internal or external command,
operable program or batch file.
```

Ajout de l'emplacement de variable d'environnement adb.exe :
https://www.it-swarm-fr.com/fr/android/adb-nest-pas-reconnu-comme-une-commande-interne-ou-externe-un-programme-utilisable-ou-un-fichier-batch/1042643018/

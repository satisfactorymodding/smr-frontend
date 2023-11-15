{ pkgs, unstable }:

pkgs.mkShell {
  nativeBuildInputs = with pkgs.buildPackages; [
    unstable.bun
  ];
}

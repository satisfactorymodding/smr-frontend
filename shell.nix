{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  nativeBuildInputs = with pkgs.buildPackages; [
    libwebp
    libaom
    protobuf
    protoc-gen-go
  ];
}

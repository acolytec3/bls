import {expect} from "chai";
import {forEachImplementation} from "../switch";

forEachImplementation((bls) => {
  describe("Keypair", () => {
    it("should create from private and public key", () => {
      const sk = bls.PrivateKey.fromKeygen();
      const sk2 = bls.PrivateKey.fromKeygen();
      const pk = sk.toPublicKey();

      const keypair = new bls.Keypair(sk as any, pk as any);

      expect(keypair.publicKey).to.be.equal(pk);
      expect(keypair.privateKey).to.be.equal(sk);
      expect(keypair.privateKey).to.not.be.equal(sk2);
    });

    it("should create from PrivateKey", () => {
      const sk = bls.PrivateKey.fromKeygen();
      const pk = sk.toPublicKey();

      const keypair = new bls.Keypair(sk as any);

      expect(keypair.publicKey.toHex()).to.equal(pk.toHex());
    });
  });
});

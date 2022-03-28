import uninstall from "../../src/commands/uninstall-cmd";

describe("uninstall-cmd", () => {
  it("returns correct helm uninstall command", async () => {
    const result = uninstall("my-release", {});
    expect(result).toBe("helm uninstall my-release");
  });
});

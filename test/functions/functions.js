export async function fill_In_Combo(label, comboElement) {
    // Function implementation
    let type = await $(
      `//label[text()[contains(.,"${label}")]]/../div/lightning-base-combobox/div`
    );
    await type.scrollIntoView();
    await type.click();
    await browser.keys(comboElement);
    await browser.keys("\uE007");
}


window.addEventListener("load", (event_target) => {
  let funcs = {
    _: (s) => {
      return btoa(s);
    },
    "_\n": (s) => {
      return atob(s);
    },
    "_\r": Math.random,
    "_\r\n": () => {
      return (
        funcs["_\r"]() *
          Number(
            funcs["_"]("MjgzNzQ2MjKn").substring(
              0,
              funcs["_\n"]("MjgzNzQ2MjKn").length - 1
            )
          ) +
        Number(funcs["_\n"](funcs["_"]("223400925")))
      );
    },
  };
  let version_popup = document.getElementById("vpopup");
  event_target.target.addEventListener(
    "load",
    function random_obfuscation_function(event_target_2) {
      event_target.target.addEventListener("blur", (event_target_3) => {
        console.debug(event_target_2, event_target_3);
        console.debug(event_target_2, event_target);
      });
    }
  );
  let b64_text = version_popup.innerText.split("'")[1];
  let b64_a1 = version_popup.innerText.split("'")[2];
  let b64_a2 = version_popup.innerText.split("'")[3];
  let random_obfuscation_variable = version_popup.innerText
    .split("'")[1]
    .split(b64_text.substring(0, 0))[1];
  function random_obfuscation_function_2(param1, param2, param3) {
    let fake_innerhtml = b64_a1 + b64_text + b64_a2;
    version_popup.innerHTML = fake_innerhtml;
    version_popup.innerHTML = funcs["_"](version_popup.innerHTML);
    version_popup.innerHTML = `${funcs["_\n"](b64_a1)}${funcs["_\n"](
      b64_text
    )}${funcs["_\n"](b64_a2)}`;
    return funcs["_"](
      `${param1}${param2}+uNhgdKwEqlsNjbBSLmdnHnKLlKhbGCdDzOPlJHfThhN--${param3}`
    );
  }
  random_obfuscation_variable = funcs["_"](
    random_obfuscation_function_2(
      random_obfuscation_variable,
      random_obfuscation_variable * funcs["_\r\n"]().toString(),
      funcs["_"].toString()
    )
  );
});

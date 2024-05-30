window.onload = () => {
  dropdown?.addEventListener("click", handleDropdown);
  accordion?.addEventListener("click", handleAccordion);
  isMobile();

  const body = document.querySelector("body");
  if (isMobile()) {
    console.log("모바일");
    body.classList.add("mobile");
  } else {
    console.log("데스크톱");
    body.classList.add("desktop");
  }

  window.focus();
  window.moveTo(0, 0);
  window.resizeTo(1280, 800);
};

const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

// 드롭다운
const dropdown = document.querySelector(".dropdown");
const handleDropdown = () => {
  const dropdownList = document.querySelectorAll(".dropdown-option li");
  const dropdownSelect = document.querySelector(".dropdown-select p");
  // // 드롭다운 오픈
  dropdown.classList.toggle("active");

  // 드롭다운 리스트 선택
  dropdownList.forEach((items) => {
    items.addEventListener("click", () => {
      dropdownList.forEach((item) => {
        item.classList.remove("active");
      });
      items.classList.add("active");
      dropdownSelect.innerHTML = items.outerText;
    });
  });
};

// 드롭다운 클로즈
const closeDropdown = () => {
  dropdown.classList.remove("active");
};

// 드롭다운 ESC 클로즈
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDropdown();
    dropdownList.forEach((item) => {
      item.classList.remove("active");
    });
  }
});

// 아코디언
const accordion = document.querySelector("#Accordion");
const handleAccordion = () => {
  accordion.classList.toggle("active");
};

// 탭 메뉴 선택
const tabs = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");
const subtabs = document.querySelectorAll(".subtab-button");
const subtabContent = document.querySelectorAll(".subtab-content");
const footer = document.querySelectorAll(".footer");
const homepageAuth = document.querySelector(".homepage-auth");

tabs.forEach((items, idx) => {
  items.addEventListener("click", (e) => {
    e.preventDefault();

    tabContent.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((content) => {
      content.classList.remove("active");
    });
    footer.forEach((content) => {
      content.classList.remove("show");
    });

    tabs[idx].classList.add("active");
    tabContent[idx].classList.add("active");
    footer[idx].classList.add("show");
  });
});

subtabs.forEach((items, idx) => {
  items.addEventListener("click", (e) => {
    e.preventDefault();

    subtabContent.forEach((content) => {
      content.classList.remove("active");
    });
    subtabs.forEach((content) => {
      content.classList.remove("active");
    });

    subtabs[idx].classList.add("active");
    subtabContent[idx].classList.add("active");
  });
});

// 홈페이지 인증
const handleHomepageAuth = () => {
  tabs.forEach((items, idx) => {
    items.classList.remove("active");
  });
  tabContent.forEach((content) => {
    content.classList.remove("active");
  });
  homepageAuth.classList.add("active");
};

// 필터
const filters = document.querySelectorAll(".filter-button");
filters.forEach((items, idx) => {
  items.addEventListener("click", (e) => {
    e.preventDefault();

    filters.forEach((content) => {
      content.classList.remove("active");
    });

    filters[idx].classList.add("active");
  });
});

// 체크박스 핸들러
const handleCheckbox = () => {
  const checkboxes = document.querySelectorAll('input[name="agree"]');
  const checked = document.querySelectorAll('input[name="agree"]:checked');
  const selectAll = document.querySelector('input[name="selectall"]');

  if (checkboxes.length === checked.length) {
    selectAll.checked = true;
  } else {
    selectAll.checked = false;
  }
};

const handleCheckboxAll = (selectAll) => {
  const checkboxes = document.getElementsByName("agree");

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
};

// 바텀시트 핸들러
const termsElement = document.getElementById("BottomSheet");
const handleOpenTerms = () => {
  termsElement.classList.add("open");
};
const handleCloseTerms = () => {
  termsElement.classList.remove("open");
};

// 앱 설치하기 팝업
const modalAppDownload = document.getElementById("Dialog-AppDownload");
const handleOpenAppDownload = () => {
  modalAppDownload.classList.add("show");
};
const handleCloseAppDownload = () => {
  modalAppDownload.classList.remove("show");
};

// 서비스페이지 이동
const goToService = (type) => {
  location.href = "../InformationInputView-Loca.html";

  switch (type) {
    case "하나카드":
      location.href = "../InputInformation-hana.html";
      break;

    default:
      location.href = "../InputInformation.html";
      break;
  }
};
const goToAddInfo = () => {
  // 추가 정보 입력 화면
  location.href = "./AdditionalInformation-Loca.html";
};
const goToBack = () => {
  history.back();
};

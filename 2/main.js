$(() => {
  renderUsersList();
});
const usersListContainer = document.getElementById("usersList");
const userProfileModalTitle = document.getElementById("userProfileModalTitle");
const userProfileModalBody = document.getElementById("userProfileModalBody");
const userProfileModalFooter = document.getElementById(
  "userProfileModalFooter"
);

let selectedUser = null;

const showModalInformation = ({ first_name, last_name, ...params }) => {
  const title = `${first_name} ${last_name}`;
  userProfileModalTitle.innerText = title;

  const profileInfo = generateProfileInformation(params, false);
  userProfileModalBody.innerHTML = profileInfo;
};

const handleOnClickProfileBtn = (id) => {
  const targetUser = users.find((el) => el.id === id);
  selectedUser = targetUser;
  showModalInformation(targetUser);
};
const cardGenerator = ({ id, first_name, last_name, avatar, email }) => {
  return `
        <div class="col-4" >
            <div class="card shadow rounded-4">
                <img src="${avatar}" class="card-img-top rounded-3 p-2 rounded-4" alt="${id}">
                <div class="card-body">
                    <h5 class="card-title">${first_name} ${last_name}</h5>
                    <p>${first_name} ${last_name} is Maktab 45 User by ID of ${id} ,you can easily get in touch with ${first_name} from </p>
                    <p>ID: ${id}</p>
                    <p>E-Mail: ${email}</p>
                    <button
                        onclick="handleOnClickProfileBtn(${id})" 
                        class="btn btn-primary rounded-3 w-100"
                        data-bs-toggle="modal" data-bs-target="#userProfileModal"
                    >
                        Profile
                    </button>
                </div>
            </div>
        </div>
    `;
};
const generateProfileInformation = ({ avatar, id, email, first_name }) => {
  return `
      <img src="${avatar}" class="card-img-top p-2 rounded-1" alt="${id}">
      <ul class="list-group list-group-flush my-4">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">email: ${email}</li>
          <li class="list-group-item">email: ${first_name}</li>
      </ul>
      `;
};
const usersListGenerator = () => {
  let usersListBody = "";
  for (const user of users) {
    usersListBody += cardGenerator(user);
  }
  return usersListBody;
};

const renderUsersList = () => {
  usersListContainer.innerHTML = usersListGenerator();
};
renderUsersList();

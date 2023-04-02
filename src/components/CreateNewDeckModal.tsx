import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { newDeckModalAtom } from "~/atoms/newDeckModalState";
import { Space_Grotesk } from "next/font/google";
import { api } from "~/utils/api";
import LoadingSpinner from "./LoadingSpinner";
import { toast } from "react-hot-toast";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export default function CreateNewDeckModal() {
  const [newDeckModal, setNewDeckModal] = useRecoilState(newDeckModalAtom);

  function closeModal() {
    setNewDeckModal({ open: false });
  }

  return (
    <Transition appear show={newDeckModal.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={` w-full max-w-lg transform  overflow-hidden rounded-2xl bg-[--bg-level-7] p-6 shadow-xl transition-all ${space_grotesk.className}`}
              >
                <Dialog.Title
                  as="p"
                  className={"text-center text-3xl tracking-wide"}
                >
                  Have a title, create a deck
                </Dialog.Title>
                <CreateNewDeckModalContent closeModal={closeModal} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

const CreateNewDeckModalContent = ({
  closeModal,
}: {
  closeModal: () => void;
}) => {
  const setNewDeckModal = useSetRecoilState(newDeckModalAtom);
  const ctx = api.useContext();
  const { mutate, isLoading: isPosting } = api.deck.createDeck.useMutation({
    onSuccess: () => {
      setInput("");
      setNewDeckModal({ open: false });
      void ctx.deck.getAllDecks.invalidate();
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.title
      if (errorMessage && errorMessage[0]) {
        toast.error(errorMessage[0]);
      } else {
        toast.error("Failed to post! try again later.")
      }
    }
  });
  const [input, setInput] = useState<string>("");

  const createnewDeck = () => {
    mutate({ title: input });
  };

  return (
    <Dialog.Description
      as="div"
      className="flex w-full flex-col items-center space-y-4 pt-10"
    >
      <div className="w-full self-start">
        <label htmlFor="new-deck-input">
          <p className="pb-2">Deck Title : </p>
        </label>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-full border border-slate-400 bg-transparent px-4  py-2 focus:outline-none"
          placeholder="Enter title of new deck"
          id="new-deck-input"
        />
      </div>
      <div className="self-end">
        <button
          onClick={closeModal}
          className="bg-transparent text-red-400 hover:shadow-none"
        >
          Cancel
        </button>
        <button
          onClick={createnewDeck}
          className="!bg-black  bg-transparent  text-center hover:shadow-none"
        >
          {isPosting ? <LoadingSpinner /> : "Create"}
        </button>
      </div>
    </Dialog.Description>
  );
};

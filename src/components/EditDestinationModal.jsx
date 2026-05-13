'use client';

import { PencilToSquare } from "@gravity-ui/icons";
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Modal, Surface } from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";

const EditDestinationModal = ({ destination, editDestinationAction }) => {
  const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description} = destination;

  const [open, setOpen] = useState(false);

  const handleEdit = async (formData) => {
    await editDestinationAction(_id, formData)
    toast.success('Edit Successful')
    setOpen(false);
  };

  return (
    <Modal isOpen={open} onOpenChange={setOpen}>
      <Modal.Trigger>
        <Button
          variant="secondary"
          className="w-full sm:w-auto"
          onPress={() => setOpen(true)}
        > <PencilToSquare/>
          Edit
        </Button>
      </Modal.Trigger>
      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] max-w-3xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-center text-xl sm:text-2xl font-bold">
                Edit Current Destination
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-4 sm:p-6 md:p-8">
              <Surface variant="default">
                <form
                  action={handleEdit}
                  className="space-y-6 sm:space-y-8 p-4 sm:p-6 md:p-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    
                    <div className="md:col-span-2">
                      <TextField name="destinationName" isRequired defaultValue={destinationName}>
                        <Label>Destination Name</Label>
                        <Input className="rounded-xl" placeholder="Bali Paradise" />
                        <FieldError />
                      </TextField>
                    </div>

                    <TextField name="country" isRequired defaultValue={country}>
                      <Label>Country</Label>
                      <Input className="rounded-xl" placeholder="Indonesia" />
                      <FieldError />
                    </TextField>

                    <div>
                      <Select name="category" isRequired placeholder="Select category" defaultValue={category}>
                        <Label>Category</Label>

                        <Select.Trigger className="rounded-xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Beach" textValue="Beach">Beach</ListBox.Item>
                            <ListBox.Item id="Mountain" textValue="Mountain">Mountain</ListBox.Item>
                            <ListBox.Item id="City" textValue="City">City</ListBox.Item>
                            <ListBox.Item id="Adventure" textValue="Adventure">Adventure</ListBox.Item>
                            <ListBox.Item id="Cultural" textValue="Cultural">Cultural</ListBox.Item>
                            <ListBox.Item id="Luxury" textValue="Luxury">Luxury</ListBox.Item>
                          </ListBox>
                        </Select.Popover>

                      </Select>
                    </div>

                    <TextField name="price" type="number" isRequired defaultValue={price}>
                      <Label>Price</Label>
                      <Input className="rounded-xl" type="number" placeholder="1299" />
                      <FieldError />
                    </TextField>

                    <TextField name="duration" isRequired defaultValue={duration}>
                      <Label>Duration</Label>
                      <Input className="rounded-xl" placeholder="7 Days / 6 Nights" />
                      <FieldError />
                    </TextField>

                    <div className="md:col-span-2">
                      <TextField name="departureDate" type="date" isRequired defaultValue={departureDate}>
                        <Label>Departure Date</Label>
                        <Input className="rounded-xl" type="date" />
                        <FieldError />
                      </TextField>
                    </div>

                    <div className="md:col-span-2">
                      <TextField name="imageUrl" isRequired defaultValue={imageUrl}>
                        <Label>Image URL</Label>
                        <Input className="rounded-xl" type="url" />
                        <FieldError />
                      </TextField>
                    </div>

                    <div className="md:col-span-2">
                      <TextField name="description" isRequired defaultValue={description}>
                        <Label>Description</Label>
                        <TextArea
                          className="rounded-xl min-h-30"
                          placeholder="Describe experience..."
                        />
                        <FieldError />
                      </TextField>
                    </div>

                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-cyan-500 text-white py-3 rounded-xl"
                  >
                    Save Destination
                  </Button>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditDestinationModal;